# React-Native Project: 

I developed this "BanQu-ReactNative" project by turning Figma Designs to React Native Web Pages.


## Prerequisites

-Node

-Yarn

-Web Browser (Chrome)

-Android Studio

-IOS

## Running

1. Download project from github https://github.com/ithunter101/BanQu-ReactNative
2. Run command "npm install" to download packages
3. Run command "yarn web" to run project on browser.
4. Run command "yarn android" to run project on android.
5. Run command "yarn ios" to run project on IOS.

## Your Requirements.
1. Pixel Perfect Design
2. Animation
3. Show received broadcast messages
4. Message Search
5. Message Editing
6. Fake API Invocation

## My Achievements
1. Pixel Perfect Design
    
     	Without using any UI libraries, I turned your figma design into React Native Web Pages.

2. Implement Animations
	
		By using "Animated.View" component, I implemented all animations you listed.
		Animations such as resizing, moving, fadeIn, fadeOut and etc. 
	
3. React Native Navigation
		By using "Stack.Navigator", I created 6 screens and then by using "navigate()" function, I integrated these screens.
		I also communicated between screens by using "route.params" variable.
	
4. Invoke Fake API
	
		By using "axios", I invoked api asynchronously.
	
5. Data Flow using Redux
	
		I loaded "UserInfo" from API and I saved this data in "store".
		I also created actions and reducers.
		Then By using "useSelector", I get the value of "userinfo" in global store.
	
6. Using Hook

		By using "useState()" and "useEffect()" function, I store data which I get from API and use this as state.
	
7. Message Search By Keyword and Tag
	
		By using Javascript "filter()" function, I filtered message data by keyword and tag.
	
## Not Implemented
1.  City Selection
	
		I don't have Google Map API Key as I've no Google developer account.
	
3.  Voice Input Search
	
		As time limit, I didn't implement this function.
	
