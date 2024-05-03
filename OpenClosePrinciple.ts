// Interfaces: The oAuthentication interface defines a contract for authentication providers. This allows for polymorphism and makes it possible to extend the behavior without modifying existing code.

// Dependency Injection: The signInWithPopup class accepts an instance of oAuthentication in its constructor, rather than creating or directly depending on concrete implementations. This allows for the use of different authentication providers without modifying the signInWithPopup class, making it open for extension.

// Usage: You're creating instances of GoogleAuthProvider and FacebookAuthProvider and passing them to signInWithPopup, which demonstrates the ability to easily switch between different authentication providers without changing the signInWithPopup class.

// Overall, the code effectively follows the Open-Closed Principle by allowing for extension without modification.

interface oAuthentication{
    authenticate():void;
}

class signInWithPopup implements oAuthentication{
  constructor(private authInstace:any){
  }
  authenticate(): void {
      this.authInstace.authenticate();
  }
}

class GoogleAuthProvider implements oAuthentication{
    authenticate(): void {
      console.log("Google Authentication Successfully")
    }
}

class FacebookAuthProvider implements oAuthentication{
    authenticate(): void {
        console.log("Facebook Authentication Successfully")
    }
}


const googleAuthProvider = new GoogleAuthProvider();
const oAuthInstance = new signInWithPopup(googleAuthProvider);
oAuthInstance.authenticate();

const facebookAuthProvider = new FacebookAuthProvider();
const oAuthInstance1 = new signInWithPopup(facebookAuthProvider);
oAuthInstance1.authenticate();
