// Converts "DD.MM.YYYY" format to a valid Date object
export const parseTurkishDate = (dateString) => {
    try {
      // Split the date string into day, month, and year
      const [day, month, year] = dateString.split(".");
      
      // Construct a valid date string in "YYYY-MM-DD" format
      const isoDate = `${year}-${month}-${day}`;
      const date = new Date(isoDate);
  
   
      if (isNaN(date.getTime())) {
        return "Unknown"; 
      }
  
      return date.getFullYear(); 
    } catch (error) {
      console.error("Error parsing date:", error);
      return "Unknown";
    }
  };
  