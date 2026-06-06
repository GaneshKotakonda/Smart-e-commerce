# SmartECommerce

A modern cross-platform e-commerce mobile application built with React Native and Expo. The application provides a complete online shopping experience with product browsing, category filtering, shopping cart management, localization support, and user profile management.

## Features

* Product catalog browsing
* Shopping cart functionality
* User authentication
* User profile management
* Multi-language support (i18n)
* Responsive mobile UI
* Promotional banners and featured products
* Flash notifications and alerts
* Redux state management
* Cross-platform support (Android & iOS)

## Screenshots

## Auth Screen
<img width="1710" height="1107" alt="Screenshot 2026-06-06 at 9 30 16 AM" src="https://github.com/user-attachments/assets/34097450-76f5-49a4-a34d-5cff234fa089" />

### Home Screen
<img width="1710" height="1107" alt="Screenshot 2026-06-06 at 9 30 40 AM" src="https://github.com/user-attachments/assets/e82ed620-0fca-48d3-9026-ac7d10eeee3c" />

<img width="1710" height="1107" alt="Screenshot 2026-06-06 at 9 30 55 AM" src="https://github.com/user-attachments/assets/bd38df34-b194-4f5f-b35b-76213d8397f5" />


### Cart Screen

<img width="1710" height="1107" alt="Screenshot 2026-06-06 at 9 31 03 AM" src="https://github.com/user-attachments/assets/fa07a123-f575-4795-baad-fe6e9478878d" />


### Profile Screen

<img width="1710" height="1107" alt="Screenshot 2026-06-06 at 9 35 25 AM" src="https://github.com/user-attachments/assets/1c3821c3-d3d9-46e8-9d3c-dea1810bdf28" />

## Checkout Screen 

<img width="1710" height="1107" alt="Screenshot 2026-06-06 at 9 31 35 AM" src="https://github.com/user-attachments/assets/3dd329fa-6f05-4826-b850-62c944e9d900" />

## Myorder Screen

<img width="1710" height="1107" alt="Screenshot 2026-06-06 at 9 31 57 AM" src="https://github.com/user-attachments/assets/961c0795-9cde-4aec-95c1-99325bacf852" />

## Tech Stack

### Frontend

* React Native
* Expo SDK 53
* TypeScript

### Navigation

* React Navigation

### State Management

* Redux Toolkit
* React Redux

### Backend & Authentication

* Firebase Authentication
* Firebase Services

### Localization

* i18next
* react-i18next

### UI & Utilities

* Expo Font
* React Native Flash Message
* React Native Vector Icons

## Project Structure

```text
src/
├── auth/
├── cart/
├── components/
├── constants/
├── data/
├── helpers/
├── Home/
├── localisation/
├── navigations/
├── profile/
├── store/
└── styles/
```

## Installation

### Prerequisites

* Node.js
* npm
* Expo CLI
* Android Studio or Android Device
* Xcode (for iOS development)

### Clone Repository

```bash
git clone https://github.com/GaneshKotakonda/Smart-e-commerce.git
cd Smart-e-commerce
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm start
```

### Run on Android

```bash
npm run android
```

### Run on iOS

```bash
npm run ios
```

## Build APK

```bash
eas build -p android --profile preview
```

## Architecture

The application follows a modular architecture:

* Feature-based folder structure
* Redux for centralized state management
* React Navigation for routing
* Firebase for authentication and backend services
* Reusable UI components for maintainability

## Contributors

* Ganesh Kotakonda

## Download

Latest APK:

https://github.com/GaneshKotakonda/Smart-e-commerce/releases/latest


Repository:
https://github.com/GaneshKotakonda/Smart-e-commerce

## Future Improvements

* Payment gateway integration
* Product search optimization
* Wishlist functionality
* Order history
* Push notifications
* Product reviews and ratings

## License

This project is intended for educational and portfolio purposes.
