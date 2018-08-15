# Contacts App v1


So I implemented all the views in EJS, and the form is sent by Ajax.
Added test's on the model validation
and that the views are loading correctly.

# Whats in?
* List contacts. This screen shows a list of profiles by name with a small thumbnail.
* Add contact. This screen captures data for the profile. Specifically, the image, user name, phone and email address.
* Contact details. Clicking on an individual contact from the list screen should display this screen. All profile data should be shown - photo, name, email, phone.

# Whats Missing?

* S3 image upload. I could do it, but the build time was over so I had to cut that one and make the photo just as a url.
* clean the DB after test or use other DB for the tests
* Oh and I used Heroku ClearDB Service to reduce time too.. can open RDS if needed.
