package com.org.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="Features/Login.feature",glue="",dryRun=false,monochrome=true,plugin={"pretty","html:report/html"})
public class RunnerClass {

}
