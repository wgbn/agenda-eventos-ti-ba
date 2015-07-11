# Calendrical

Calendrical is intended to make building calendar interfaces easier.

There are many existing calendar plugins, including Datepicker for jQuery UI, FullCalendar, and AngularUI Calendar.  However, it's inconvenient that these calendar plugins tie together the date calculations that make the calendar possible and the visualization of the calendar.  Calendrical is intended to provide the date calculations that will enable users to easily produce their own calendar visualizations.

## Basic usage

The _setUtcMode_ method can be used to select whether dates are returned relative to the local time zone or to UTC.

Only one other method is intended for use: getWeeksInMonth.

getWeeksInMonth(any _Date_ in the month, [_options_])

Where _options_ is an object which may have the following properties:
	weekStartsWith (0 Sunday, 6 Saturday, based on JavaScript's Date object)	

```
var weeks = calendrical.getWeeksInMonth();
```

Now weeks is an array of weeks, which each are an array of *day* objects.

The day objects contain a dayOfMonth number (1 to 31), a date (a JavaScript Date) for the day, and one of three boolean flags set to true:
inCurrentMonth, trailingDay, or leadingDay.

This should make it easy to build a calendar interface by looping over the weeks, then looping over
the days, and styling each day based on whether it is in the current month, previous month, or next month.

## Usage within Angular

```
<div class="calendar-week" ng-repeat="week in weeks track by $index">
	<div class="calendar-day" ng-click="select(day)" ng-repeat="day in week track by $index"
		 ng-class="{hide: !day.inCurrentMonth, 'selection-end': isAtSelectionEnd(day), selected: isInSelectedRange(day)}">
			{{day.dayOfMonth}}
	</div>
</div>
```
