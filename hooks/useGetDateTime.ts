export const useGetDateTime = (date: any) => {
    const timeDate = new Date(date)

    const year = timeDate.getFullYear();
    const month = String(timeDate.getMonth() + 1).padStart(2, "0"); // Месяцы в JavaScript нумеруются с 0, поэтому добавляем 1
    const day = String(timeDate.getDate()).padStart(2, "0");
    const hours = String(timeDate.getHours()).padStart(2, "0");
    const minutes = String(timeDate.getMinutes()).padStart(2, "0");
    const seconds = String(timeDate.getSeconds()).padStart(2, "0");

    const formattedTime = `${year}-${month}-${day}-${hours}:${minutes}:${seconds}`;


    return {formattedTime}

}