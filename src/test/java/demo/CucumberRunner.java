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
<<<<<<<<< Temporary merge branch 1
        features = "src/test/resources/features", tags = {"@Android and @Profile"})
=========
        features = "src/test/resources/features", tags = {"@Test"})
>>>>>>>>> Temporary merge branch 2
public class CucumberRunner {
}
