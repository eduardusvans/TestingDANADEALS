package demo;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        stepNotifications = true,
        //for plugin check https://cucumber.io/docs/cucumber/reporting/
        plugin = {"json:build/cucumber.json", "pretty", "html:build/result"},
        features = "src/test/resources/features/admin/", tags = {"@HomeAdmin and @Reset and @Search and @Positive and @1-1"})
public class CucumberRunner {
}
