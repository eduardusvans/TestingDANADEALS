package demo.locators.payer.history;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface HistoryPageLocator {
    By In_Progress_Tab = MobileBy.xpath("//android.widget.LinearLayout[@content-desc=\"IN-PROGRESS\"]");
    By Completed_Tab = MobileBy.xpath("//android.widget.LinearLayout[@content-desc=\"COMPLETED\"]");
    By Filter_Date = MobileBy.id("tv_filter");

    By Voucher_Scroll = MobileBy.id("rv_completed");
    By Voucher_INPROGRESS_SCROLL = MobileBy.id("rv_in_progress");
    By Voucher_LIST_INPROGRESS = MobileBy.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[1]/android.widget.LinearLayout/androidx.viewpager.widget.ViewPager/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]");
    By Voucher_LIST_COMPLETED = MobileBy.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[1]/android.widget.LinearLayout/androidx.viewpager.widget.ViewPager/android.view.ViewGroup/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]");

    //filter date
    By BTN_CANCEL = MobileBy.id("cancel_button");
    By BTN_SAVE = MobileBy.id("confirm_button");

    By BTN_EDIT = MobileBy.id("mtrl_picker_header_toggle");
    By START_DATE = MobileBy.id("mtrl_picker_text_input_range_start"); // m/d/yy
    By END_DATE = MobileBy.id("mtrl_picker_text_input_range_end"); // m/d/yy

    By START_DATE_Picker = MobileBy.xpath("//android.widget.TextView[@content-desc=\"Sat, Jun 27\"]\n");
    By END_DATE_Picker = MobileBy.xpath("//android.widget.TextView[@content-desc=\"Sat, Jun 27\"]\n");
    By END_DATE_Picker_1 = MobileBy.xpath("//android.widget.TextView[@content-desc=\"Sat, Jun 27\"]\n");
    By END_DATE_Picker_5 = MobileBy.xpath("//android.widget.TextView[@content-desc=\"Sat, Jun 27\"]\n");
    By END_DATE_Picker_7 = MobileBy.xpath("//android.widget.TextView[@content-desc=\"Sat, Jun 27\"]\n");


}
