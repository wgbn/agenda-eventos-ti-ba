describe('calendrical', function() {

	it('should export calendrical', function() {
		expect(calendrical).toBeDefined();
	});

	describe('getLeadingDays', function() {
		it('should return the days from the last week of the previous month, starting from the day the week starts with, until the first day of the current month', function() {			
			expect(calendrical.utility.getLeadingDays(new Date(2014, 10, 7), 0, true)).toEqual([26, 27, 28, 29, 30, 31]);
			expect(calendrical.utility.getLeadingDays(new Date(2014, 10), 1, true)).toEqual([27, 28, 29, 30, 31]);
			expect(calendrical.utility.getLeadingDays(new Date(2014, 10), 2, true)).toEqual([28, 29, 30, 31]);
			expect(calendrical.utility.getLeadingDays(new Date(2014, 10), 3, true)).toEqual([29, 30, 31]);
			expect(calendrical.utility.getLeadingDays(new Date(2014, 10), 4, true)).toEqual([30, 31]);
			expect(calendrical.utility.getLeadingDays(new Date(2014, 10), 5, true)).toEqual([31]);
			expect(calendrical.utility.getLeadingDays(new Date(2014, 10), 6, true)).toEqual([]);

			expect(calendrical.utility.getLeadingDays(new Date(2014, 10), 5)).toEqual([{dayOfMonth: 31, leadingDay: true, date: new Date(2014, 9, 31)}]);
		});
	});

	describe('getLastDayInMonth', function() {
		it('should return the last day in the month', function() {
			expect(calendrical.utility.getLastDayInMonth(new Date(2014, 10))).toEqual(new Date(2014, 10, 30));
		});
	});

	describe('getTrailingDays', function() {
		it('should return the days from the last week of the previous month, starting from the day the week starts with, until the first day of the current month', function() {			
			expect(calendrical.utility.getTrailingDays(new Date(2014, 10, 7), 1, true)).toEqual([]);
			expect(calendrical.utility.getTrailingDays(new Date(2014, 10), 2, true)).toEqual([1]);
			expect(calendrical.utility.getTrailingDays(new Date(2014, 10), 3, true)).toEqual([1, 2]);
			expect(calendrical.utility.getTrailingDays(new Date(2014, 10), 4, true)).toEqual([1, 2, 3]);
			expect(calendrical.utility.getTrailingDays(new Date(2014, 10), 5, true)).toEqual([1, 2, 3, 4]);
			expect(calendrical.utility.getTrailingDays(new Date(2014, 10), 6, true)).toEqual([1, 2, 3, 4, 5]);
			expect(calendrical.utility.getTrailingDays(new Date(2014, 10), 0, true)).toEqual([1, 2, 3, 4, 5, 6]);	

			expect(calendrical.utility.getTrailingDays(new Date(2014, 10), 2)).toEqual([{dayOfMonth: 1, trailingDay: true, date: new Date(2014, 11, 1)}]);
		});
	});

	describe('getWeeksInMonth', function() {
        it('should return a weekly calendar for the given month', function() {
            expect(calendrical.getWeeksInMonth(new Date(2014, 10, 7))).toEqual([
                [ { dayOfMonth: 26, leadingDay: true, date: new Date(2014, 9, 26) }, { dayOfMonth: 27, leadingDay: true, date: new Date(2014, 9, 27) }, { dayOfMonth: 28, leadingDay: true, date: new Date(2014, 9, 28) }, { dayOfMonth: 29, leadingDay: true, date: new Date(2014, 9, 29) }, { dayOfMonth: 30, leadingDay: true, date: new Date(2014, 9, 30) }, { dayOfMonth: 31, leadingDay: true, date: new Date(2014, 9, 31) }, { dayOfMonth: 1, inCurrentMonth: true, date: new Date(2014, 10, 1) } ],
                [ { dayOfMonth: 2, inCurrentMonth: true, date: new Date(2014, 10, 2) }, { dayOfMonth: 3, inCurrentMonth: true, date: new Date(2014, 10, 3) }, { dayOfMonth: 4, inCurrentMonth: true, date: new Date(2014, 10, 4) }, { dayOfMonth: 5, inCurrentMonth: true, date: new Date(2014, 10, 5) }, { dayOfMonth: 6, inCurrentMonth: true, date: new Date(2014, 10, 6) }, { dayOfMonth: 7, inCurrentMonth: true, date: new Date(2014, 10, 7) }, { dayOfMonth: 8, inCurrentMonth: true, date: new Date(2014, 10, 8) } ],
                [ { dayOfMonth: 9, inCurrentMonth: true, date: new Date(2014, 10, 9) }, { dayOfMonth: 10, inCurrentMonth: true, date: new Date(2014, 10, 10) }, { dayOfMonth: 11, inCurrentMonth: true, date: new Date(2014, 10, 11) }, { dayOfMonth: 12, inCurrentMonth: true, date: new Date(2014, 10, 12) }, { dayOfMonth: 13, inCurrentMonth: true, date: new Date(2014, 10, 13) }, { dayOfMonth: 14, inCurrentMonth: true, date: new Date(2014, 10, 14) }, { dayOfMonth: 15, inCurrentMonth: true, date: new Date(2014, 10, 15) } ],
                [ { dayOfMonth: 16, inCurrentMonth: true, date: new Date(2014, 10, 16) }, { dayOfMonth: 17, inCurrentMonth: true, date: new Date(2014, 10, 17) }, { dayOfMonth: 18, inCurrentMonth: true, date: new Date(2014, 10, 18) }, { dayOfMonth: 19, inCurrentMonth: true, date: new Date(2014, 10, 19) }, { dayOfMonth: 20, inCurrentMonth: true, date: new Date(2014, 10, 20) }, { dayOfMonth: 21, inCurrentMonth: true, date: new Date(2014, 10, 21) }, { dayOfMonth: 22, inCurrentMonth: true, date: new Date(2014, 10, 22) } ],
                [ { dayOfMonth: 23, inCurrentMonth: true, date: new Date(2014, 10, 23) }, { dayOfMonth: 24, inCurrentMonth: true, date: new Date(2014, 10, 24) }, { dayOfMonth: 25, inCurrentMonth: true, date: new Date(2014, 10, 25) }, { dayOfMonth: 26, inCurrentMonth: true, date: new Date(2014, 10, 26) }, { dayOfMonth: 27, inCurrentMonth: true, date: new Date(2014, 10, 27) }, { dayOfMonth: 28, inCurrentMonth: true, date: new Date(2014, 10, 28) }, { dayOfMonth: 29, inCurrentMonth: true, date: new Date(2014, 10, 29) } ],
                [ { dayOfMonth: 30, inCurrentMonth: true, date: new Date(2014, 10, 30) }, { dayOfMonth: 1, trailingDay: true, date: new Date(2014, 11, 1) }, { dayOfMonth: 2, trailingDay: true, date: new Date(2014, 11, 2) }, { dayOfMonth: 3, trailingDay: true, date: new Date(2014, 11, 3) }, { dayOfMonth: 4, trailingDay: true, date: new Date(2014, 11, 4) }, { dayOfMonth: 5, trailingDay: true, date: new Date(2014, 11, 5) }, { dayOfMonth: 6, trailingDay: true, date: new Date(2014, 11, 6) } ]
            ]);
        });

        it('should return a weekly calendar for the given month, with weeks starting on an arbitrary day', function() {
            expect(calendrical.getWeeksInMonth(new Date(2014, 10, 7), { weekStartsWith: 3 })).toEqual([
                [ { dayOfMonth: 29, leadingDay: true, date: new Date(2014, 9, 29) }, { dayOfMonth: 30, leadingDay: true, date: new Date(2014, 9, 30) }, { dayOfMonth: 31, leadingDay: true, date: new Date(2014, 9, 31) }, { dayOfMonth: 1, inCurrentMonth: true, date: new Date(2014, 10, 1) }, { dayOfMonth: 2, inCurrentMonth: true, date: new Date(2014, 10, 2) }, { dayOfMonth: 3, inCurrentMonth: true, date: new Date(2014, 10, 3) }, { dayOfMonth: 4, inCurrentMonth: true, date: new Date(2014, 10, 4) } ],
                [ { dayOfMonth: 5, inCurrentMonth: true, date: new Date(2014, 10, 5) }, { dayOfMonth: 6, inCurrentMonth: true, date: new Date(2014, 10, 6) }, { dayOfMonth: 7, inCurrentMonth: true, date: new Date(2014, 10, 7) }, { dayOfMonth: 8, inCurrentMonth: true, date: new Date(2014, 10, 8) }, { dayOfMonth: 9, inCurrentMonth: true, date: new Date(2014, 10, 9) }, { dayOfMonth: 10, inCurrentMonth: true, date: new Date(2014, 10, 10) }, { dayOfMonth: 11, inCurrentMonth: true, date: new Date(2014, 10, 11) } ],
                [ { dayOfMonth: 12, inCurrentMonth: true, date: new Date(2014, 10, 12) }, { dayOfMonth: 13, inCurrentMonth: true, date: new Date(2014, 10, 13) }, { dayOfMonth: 14, inCurrentMonth: true, date: new Date(2014, 10, 14) }, { dayOfMonth: 15, inCurrentMonth: true, date: new Date(2014, 10, 15) }, { dayOfMonth: 16, inCurrentMonth: true, date: new Date(2014, 10, 16) }, { dayOfMonth: 17, inCurrentMonth: true, date: new Date(2014, 10, 17) }, { dayOfMonth: 18, inCurrentMonth: true, date: new Date(2014, 10, 18) } ],
                [ { dayOfMonth: 19, inCurrentMonth: true, date: new Date(2014, 10, 19) }, { dayOfMonth: 20, inCurrentMonth: true, date: new Date(2014, 10, 20) }, { dayOfMonth: 21, inCurrentMonth: true, date: new Date(2014, 10, 21) }, { dayOfMonth: 22, inCurrentMonth: true, date: new Date(2014, 10, 22) }, { dayOfMonth: 23, inCurrentMonth: true, date: new Date(2014, 10, 23) }, { dayOfMonth: 24, inCurrentMonth: true, date: new Date(2014, 10, 24) }, { dayOfMonth: 25, inCurrentMonth: true, date: new Date(2014, 10, 25) } ],
                [ { dayOfMonth: 26, inCurrentMonth: true, date: new Date(2014, 10, 26) }, { dayOfMonth: 27, inCurrentMonth: true, date: new Date(2014, 10, 27) }, { dayOfMonth: 28, inCurrentMonth: true, date: new Date(2014, 10, 28) }, { dayOfMonth: 29, inCurrentMonth: true, date: new Date(2014, 10, 29) }, { dayOfMonth: 30, inCurrentMonth: true, date: new Date(2014, 10, 30) }, { dayOfMonth: 1, trailingDay: true, date: new Date(2014, 11, 1) }, { dayOfMonth: 2, trailingDay: true, date: new Date(2014, 11, 2) } ]
            ]);
        });
	});

	describe('useUtcMode', function() {
		it('when true should cause dates to be relative to UTC', function() {			
			expect(calendrical.utility.getLastDayInMonth(new Date(2014, 10))).toEqual(new Date(2014, 10, 30));

			calendrical.setUtcMode(true);
			expect(calendrical.utility.getLastDayInMonth(new Date(2014, 10))).toEqual(new Date(Date.UTC(2014, 10, 30)));

			calendrical.setUtcMode(false); // reset
		});
	});

	describe('dateFactory', function() {
		it('should create a correct Date object when passed an array (year, month, day, ...) of 2 to arguments (the first 7 being valid)', function() {
			expect(calendrical.utility.dateFactory(2014)).toEqual(new Date(2014));
			expect(calendrical.utility.dateFactory(2014, 1)).toEqual(new Date(2014, 1));
			expect(calendrical.utility.dateFactory(2014, 1, 2)).toEqual(new Date(2014, 1, 2));
			expect(calendrical.utility.dateFactory(2014, 1, 2, 3)).toEqual(new Date(2014, 1, 2, 3));
			expect(calendrical.utility.dateFactory(2014, 1, 2, 3, 4)).toEqual(new Date(2014, 1, 2, 3, 4));
			expect(calendrical.utility.dateFactory(2014, 1, 2, 3, 4, 5)).toEqual(new Date(2014, 1, 2, 3, 4, 5));
			expect(calendrical.utility.dateFactory(2014, 1, 2, 3, 4, 5, 6)).toEqual(new Date(2014, 1, 2, 3, 4, 5, 6));
			expect(calendrical.utility.dateFactory(2014, 1, 2, 3, 4, 5, 6, 7)).toEqual(new Date(2014, 1, 2, 3, 4, 5, 6, 7));
			expect(calendrical.utility.dateFactory(2014, 1, 2, 3, 4, 5, 6, 7, 8)).toEqual(new Date(2014, 1, 2, 3, 4, 5, 6, 7, 8));
		});
	});

});