package demo;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        strict = true,
        stepNotifications = true,
        //for plugin check https://cucumber.io/docs/cucumber/reporting/
        plugin = {"json:build/cucumber.json", "pretty", "html:build/result"},
        features = "src/test/resources/features", tags = {"@Android and @SearchVoucher and @Positive"})
public class CucumberRunner {
}
