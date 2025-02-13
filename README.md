# Destination Trivia


This website/application allows users to pick trip/distination by matching cities, states, and countries.

## Features

Users must first sign up or log in with a username and password.

![log_in.png](/images/log_in.png)

![sign_up.png](/images/sign_up.png)

![home_page.png](/images/home_page.png)





User will be presented with city, state, and/or country information to match with the desination selected.


Users can add and remove destinations by clicking delete destination.

![features.png](/images/features.png)


## Technologies

- MySql
- API
- Express.js
- React
- React Router
- Axios
- Bootstrap
- CORS
- Node.js


# Database Script
```
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `state` (
  `id` int NOT NULL AUTO_INCREMENT,
  `statename` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `capital` (
  `id` int NOT NULL AUTO_INCREMENT,
  `capital` varchar(45) DEFAULT NULL,
  `stateID` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



```


# Improvements in the Future    
 - My descritption of destination locations
 - Large question database
 - Invite firends to join link
