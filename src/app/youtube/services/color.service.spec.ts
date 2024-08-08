import { TestBed } from "@angular/core/testing";
import { addDays, format } from "date-fns";

import {
    DAYS_THRESHOLDS,
    ITEM_COLOR_CLASSES,
    ITEM_COLORS,
} from "../../shared/utils/constants";
import { getDateDifferenceInDays } from "../../shared/utils/date-utils";
import { ColorService } from "./color.service";

jest.mock("../../shared/utils/date-utils");

describe("ColorService", () => {
    let service: ColorService;
    const today = new Date();
    const dateFormat = "yyyy-MM-dd";

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ColorService],
        });
        service = TestBed.inject(ColorService);
    });

    describe("getColor", () => {
        it("should return ITEM_COLOR_OLD for old items", () => {
            const oldDate = format(
                addDays(today, -(DAYS_THRESHOLDS.OLD + 1)),
                dateFormat,
            );
            (getDateDifferenceInDays as jest.Mock).mockReturnValue(
                DAYS_THRESHOLDS.OLD + 1,
            );
            expect(service.getColor(oldDate)).toBe(ITEM_COLORS.ITEM_COLOR_OLD);
        });

        it("should return ITEM_COLOR_MIDDLE_AGED for middle-aged items", () => {
            const middleAgedDate = format(
                addDays(today, -(DAYS_THRESHOLDS.MIDDLE_AGED + 1)),
                dateFormat,
            );
            (getDateDifferenceInDays as jest.Mock).mockReturnValue(
                DAYS_THRESHOLDS.MIDDLE_AGED + 1,
            );
            expect(service.getColor(middleAgedDate)).toBe(
                ITEM_COLORS.ITEM_COLOR_MIDDLE_AGED,
            );
        });

        it("should return ITEM_COLOR_RECENT for recent items", () => {
            const recentDate = format(
                addDays(today, -(DAYS_THRESHOLDS.RECENT + 1)),
                dateFormat,
            );
            (getDateDifferenceInDays as jest.Mock).mockReturnValue(
                DAYS_THRESHOLDS.RECENT + 1,
            );
            expect(service.getColor(recentDate)).toBe(
                ITEM_COLORS.ITEM_COLOR_RECENT,
            );
        });

        it("should return ITEM_COLOR_NEW for new items", () => {
            const newDate = format(
                addDays(today, -(DAYS_THRESHOLDS.RECENT - 1)),
                dateFormat,
            );
            (getDateDifferenceInDays as jest.Mock).mockReturnValue(
                DAYS_THRESHOLDS.RECENT - 1,
            );
            expect(service.getColor(newDate)).toBe(ITEM_COLORS.ITEM_COLOR_NEW);
        });
    });

    describe("getColorClass", () => {
        it("should return ITEM_COLOR_CLASS_OLD for old items", () => {
            const oldDate = format(
                addDays(today, -(DAYS_THRESHOLDS.OLD + 1)),
                dateFormat,
            );
            (getDateDifferenceInDays as jest.Mock).mockReturnValue(
                DAYS_THRESHOLDS.OLD + 1,
            );
            expect(service.getColorClass(oldDate)).toBe(
                ITEM_COLOR_CLASSES.ITEM_COLOR_OLD,
            );
        });

        it("should return ITEM_COLOR_CLASS_MIDDLE_AGED for middle-aged items", () => {
            const middleAgedDate = format(
                addDays(today, -(DAYS_THRESHOLDS.MIDDLE_AGED + 1)),
                dateFormat,
            );
            (getDateDifferenceInDays as jest.Mock).mockReturnValue(
                DAYS_THRESHOLDS.MIDDLE_AGED + 1,
            );
            expect(service.getColorClass(middleAgedDate)).toBe(
                ITEM_COLOR_CLASSES.ITEM_COLOR_MIDDLE_AGED,
            );
        });

        it("should return ITEM_COLOR_CLASS_RECENT for recent items", () => {
            const recentDate = format(
                addDays(today, -(DAYS_THRESHOLDS.RECENT + 1)),
                dateFormat,
            );
            (getDateDifferenceInDays as jest.Mock).mockReturnValue(
                DAYS_THRESHOLDS.RECENT + 1,
            );
            expect(service.getColorClass(recentDate)).toBe(
                ITEM_COLOR_CLASSES.ITEM_COLOR_RECENT,
            );
        });

        it("should return ITEM_COLOR_CLASS_NEW for new items", () => {
            const newDate = format(
                addDays(today, -(DAYS_THRESHOLDS.RECENT - 1)),
                dateFormat,
            );
            (getDateDifferenceInDays as jest.Mock).mockReturnValue(
                DAYS_THRESHOLDS.RECENT - 1,
            );
            expect(service.getColorClass(newDate)).toBe(
                ITEM_COLOR_CLASSES.ITEM_COLOR_NEW,
            );
        });
    });
});
