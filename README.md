# Social Media Authentication using Firebase

* Authentication can be done on firebase using many social media applications
* Youtube tutorial video: [React authentication with social media (Facebook, Github, Google)](https://www.youtube.com/watch?v=MG3ZTfdxODA)
* Steps
	* On the firebase website
		* Create firebase project
		* Create firebase web app
		* On the firebase website, activate authentication capability for the relevant social media
		* Copy the firebase web app configs from the firebase website and paste it into the our actual web app code.
	* In the actual web-app code
		* Initialize the firebase-app using the copied firebase configs
		* Create `authenticationProvider` objects for the relevant services (`FacebookAuthProvider`, `GithubAuthProvider`, `GoogleAuthProvider`, etc.)
		* Get `auth` object from the initialized firebase-app object
		* Call the `signInWithPopup(auth, provider)` function to open the sign-in dialog window and return the result object.