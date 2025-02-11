export const getServerTimeAsDate = () => {
    const date = new Date();

    return `${date.getFullYear()}-${
        date.getMonth() + 1
    }-${date.getDate()}:${date.getHours().toString().padStart(2, '0')}:${date
        .getMinutes()
        .toString()
        .padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
};

export const getServerTimeAsUnix = () => {
    return new Date().getTime();
};
