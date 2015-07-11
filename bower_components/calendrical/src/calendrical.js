(function() {
	'use strict';

	var calendrical = { };

	var isUtcMode = false;

	function dateFactory() {
		if ( isUtcMode ) {
			return new Date(Date.UTC.apply(Date.UTC, arguments));
		}

		var numArgs = arguments.length;

		// in order of likely number of arguments

		if ( numArgs === 2 ) {
			return new Date(arguments[0], arguments[1]);
		} else if ( numArgs === 3 ) {
			return new Date(arguments[0], arguments[1], arguments[2]);
		} else if ( numArgs === 1 ) {
			return new Date(arguments[0]);
		} else if ( numArgs === 0 ) {
			return new Date();
		} else if ( numArgs === 4 ) {
			return new Date(arguments[0], arguments[1], arguments[2], arguments[3]);
		} else if ( numArgs === 5 ) {
			return new Date(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
		} else if ( numArgs === 6 ) {
			return new Date(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
		} else if ( numArgs >= 7 ) {
			return new Date(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
		}

		// unfortunately this solution requires EcmaScript 5 which is not universally available
		// the first Date argument applies to the Date.bind call, and the second in [ ] is applied to the constructor
		// return new (Date.bind.apply(Date, [Date].concat(arguments)));
	};

	function setUtcMode(utcMode) {
		isUtcMode = utcMode;
	}

	function getBeginningOfMonth(dateInMonth) {
		return dateFactory(dateInMonth.getFullYear(), dateInMonth.getMonth());
	}

	function getLastDayInMonth(dateInMonth) {
		// day-of-month is 1-indexed so 0 moves the date back to the last day of the previous month
		return dateFactory(dateInMonth.getFullYear(), dateInMonth.getMonth() + 1, 0);
	}

	function getLastDayInPreviousMonth(dateInMonth) {
		// day-of-month is 1-indexed so 0 moves the date back to the last day of the previous month
		return dateFactory(dateInMonth.getFullYear(), dateInMonth.getMonth(), 0); 
	}

	function getLeadingDays(dateInMonth, weekStartsWith, simple) {
		var leadingDays = [];

		var beginningOfMonth = getBeginningOfMonth(dateInMonth);

		var monthStartsWith = beginningOfMonth.getDay(); // 0:6 for Sunday:Saturday

		var daysNeededFromPreviousMonth = (monthStartsWith - weekStartsWith + 7) % 7;

		var lastDayInPreviousMonth = getLastDayInPreviousMonth(beginningOfMonth);

		var lastDateInPreviousMonth = lastDayInPreviousMonth.getDate(); // 0:31

		for ( var i = lastDateInPreviousMonth - daysNeededFromPreviousMonth + 1;  i <= lastDateInPreviousMonth; ++i ) {
			if ( simple ) {
				leadingDays.push(i);
			} else {
				leadingDays.push({
					dayOfMonth: i,
					leadingDay: true,
					date: dateFactory(lastDayInPreviousMonth.getFullYear(), lastDayInPreviousMonth.getMonth(), i)
				});
			}
		}

		return leadingDays;
	}

	function getTrailingDays(dateInCurrentMonth, weekStartsWith, simple) {
		var trailingDays = [];

		var weekEndsWith = (weekStartsWith + 6) % 7;

		var lastDayInMonth = getLastDayInMonth(dateInCurrentMonth);

		var monthEndsWith = lastDayInMonth.getDay();

		var numberOfTrailingDays = (weekEndsWith - monthEndsWith + 7) % 7;

		for ( var i = 1; i <= numberOfTrailingDays; ++i ) {
			if ( simple ) {
				trailingDays.push(i);
			} else {
				trailingDays.push({
					dayOfMonth: i,
					trailingDay: true, // for the date below, JS avoids the 13th month (12 base 0) problem by adjusting the year
					date: dateFactory(lastDayInMonth.getFullYear(), lastDayInMonth.getMonth() + 1, i)
				});
			}
		}

		return trailingDays;
	}

	function getWeeksInMonth(dateInMonth, options) {
		var weekStartsWith = 0; // Sunday

		if ( options && options.weekStartsWith ) {
			weekStartsWith = options.weekStartsWith;
		}

		var weeks = [ ],
		    currentWeek;

		// if the beginning of the month isn't the same day that the week starts with, we need to
		// get the days from the previous month until the start of the current month

		var daysInCurrentMonth = getLastDayInMonth(dateInMonth).getDate();

		currentWeek = getLeadingDays(dateInMonth, weekStartsWith);

		for ( var i = 1; i <= daysInCurrentMonth; ++i ) {
			currentWeek.push({
				dayOfMonth: i,
				inCurrentMonth: true,
				date: dateFactory(dateInMonth.getFullYear(), dateInMonth.getMonth(), i)
			});

			if ( currentWeek.length === 7 ) {
				weeks.push(currentWeek);
				currentWeek = [];
			}
		}

		currentWeek = currentWeek.concat(getTrailingDays(dateInMonth, weekStartsWith));

		if ( currentWeek.length > 0 ) { // last week of month could have had 7 days and no trailing days
			weeks.push(currentWeek);
		}

		return weeks;
	}


	// expose public functions or functions to be tested


	calendrical = {
		getWeeksInMonth: getWeeksInMonth,
		setUtcMode: setUtcMode,
		utility: {
			getLeadingDays: getLeadingDays,
			getTrailingDays: getTrailingDays,
			getLastDayInMonth: getLastDayInMonth,
			dateFactory: dateFactory
		}
	};


	// expose calendrical through module.exports, define, angular service, or on the global scope


	var globalScope = typeof global !== 'undefined' ? global : this;

	var oldGlobalCalendrical = globalScope.calendrical;

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = calendrical;
	} else if ( typeof define === 'function' && define.amd ) {
		define('calendrical', function(require, exports, module) {
			if ( module.config && module.config() && module.config().noGlobal === true ) {
				globalScope.calendrical = oldGlobalCalendrical;
			}

			return calendrical;
		});
	} else if ( typeof(angular) !== 'undefined' && angular.module ) {
		angular.module('calendrical', []).factory('calendrical', function() {
			return calendrical;
		});
	} else {
		globalScope.calendrical = calendrical;
	}
}).call(this);
