<template>
    <main>
        <div class="block center">
            <NuxtPicture
                width="450"
                :src="getErrorImage(error.statusCode)"
                :alt="getAltText(error.statusCode)"
            />
        </div>
        <div class="error-message mt-4">
            {{ getErrorMessage(error.statusCode) }}
        </div>
        <div class="block center mt-4">
            <button @click="handleError">Go Back to Shopping</button>
        </div>
    </main>
</template>

<script setup>
const { error } = defineProps({
    error: Object,
});

const handleError = () => {
    navigateTo('/', { external: true });
};

const getErrorImage = (statusCode) => {
    switch (statusCode) {
        case 404:
            return '/images/404.svg'; // Page not found
        case 500:
            return '/images/500.svg'; // Internal server error
        case 503:
            return '/images/503.svg'; // Service unavailable
        case 401:
            return '/images/401.svg'; // Unauthorized
        case 403:
            return '/images/403.svg'; // Forbidden
        case 408:
            return '/images/408.svg'; // Timeout
        default:
            return '/images/general-error.svg'; // General error
    }
};

const getErrorMessage = (statusCode) => {
    switch (statusCode) {
        case 404:
            return "Oops! We couldn't find what you're looking for. Maybe it’s hiding in aisle 9?";
        case 500:
            return "Yikes! Something went wrong on our end. Our IT team is on it!";
        case 503:
            return "Our servers are overloaded! We're restocking digitally. Please try again later.";
        case 401:
            return "You're unauthorized to access this section. Please log in first—no free rides today!";
        case 403:
            return "Access denied! Even our best discounts can't get you in here.";
        case 408:
            return "Looks like our servers were taking a tea break. Please try again!";
        default:
            return "An unknown error occurred. We blame the shopping trolley—it’s always up to mischief!";
    }
};

const getAltText = (statusCode) => {
    switch (statusCode) {
        case 404:
            return "Page Not Found";
        case 500:
            return "Server Error";
        case 503:
            return "Service Unavailable";
        case 401:
            return "Unauthorized Access";
        case 403:
            return "Access Denied";
        case 408:
            return "Request Timeout";
        default:
            return "Unknown Error";
    }
};
</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f5f7;
    font-family: 'Roboto', sans-serif;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.error-message {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin: 2rem 0;
    color: #f7941f;
}

button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background-color: #f7941f;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #f7941f;
}
</style>

