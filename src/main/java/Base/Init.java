package Base;


import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Init {

	public static WebDriver driver;

	public static void init() {
		System.setProperty("webdriver.chrome.driver", "driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.get("https://techfios.com/test/101/");
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);

	}

	public static void tearDown() {
		driver.close();
		driver.quit();
		
	}

}
