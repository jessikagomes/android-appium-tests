describe('Android App Test', () => {
  it('should not login with invalid credentials', async () => {
    // Access the username input element by its content-desc
    await $('~test-Username').setValue("wrongUser");

    // Access the password input element by its content-desc
    await $('~test-Password').setValue("wrongPassword");

    // Access the login button by its content-desc and click
    await $('~test-LOGIN').click();

    // Verify that the error message is displayed
    await expect($('//android.widget.TextView[@text="Username and password do not match any user in this service."]'))
      .toBeDisplayed();
  });

  it('should login with valid credentials', async () => {
    // Access the username input element and provide the valid username
    await $('~test-Username').setValue("standard_user");

    // Access the password input element and provide the valid password
    await $('~test-Password').setValue("secret_sauce");

    // Click the login button
    await $('~test-LOGIN').click();

    // Verify that the "PRODUCTS" page is displayed
    await expect($('//android.widget.TextView[@text="PRODUCTS"]')).toBeDisplayed();
  });
});

