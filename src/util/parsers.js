import moment from 'moment';

export const convertFahrenheitToCelsius = (fahrenheit) => {
    const parsedValue = (fahrenheit - 32) * 0.5556;
    return (parsedValue).toFixed(1);
}

export const convertEpochDatetimeToTime = (epochDateTime) => {
    return moment.unix(epochDateTime).format('hh:mm A');
}

export const convertEpochDateTimeToDate = (epochDateTime) => {
    if(epochDateTime === 0) {
        return '';
    }
    const tmp = new Date(0);
    tmp.setUTCSeconds(epochDateTime);
    return tmp.toLocaleDateString();
}