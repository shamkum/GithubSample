package com.org.implementation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Logic {
	static WebDriver driver;
	@Given("^: user is on Facebook application$")
	public void user_is_on_Facebook_application() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "D:/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.facebook.com/");
	}

	@When("^: user enters username$")
	public void user_enters_username() throws Throwable {
		driver.findElement(By.id("email")).sendKeys("shamravi25@gmail.com");
	}

	@When("^: user enters password$")
	public void user_enters_password() throws Throwable {
		driver.findElement(By.id("pass")).sendKeys("zxcgbhnj0987654321");
	}

	@Then("^: user click on login button$")
	public void user_click_on_login_button() throws Throwable {
	   driver.findElement(By.xpath("//button[@type='submit']")).click();
	}

	@Then("^: user closes the browser$")
	public void user_closes_the_browser() throws Throwable {
	  Thread.sleep(5000);
	  driver.close();
	}

}
