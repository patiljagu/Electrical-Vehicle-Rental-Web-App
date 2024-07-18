module.exports = (app) => {

    const BookingController = require('../Controllers/BookingController')

    app.get("/AllBooking",BookingController.AllBooking)
    app.post("/AddBooking",BookingController.AddBooking)
    app.put("/UpdateBooking/:BookingId", BookingController.UpdateBooking)
    app.delete("/DeleteBooking/:BookingId", BookingController.DeleteBooking)
    app.get("/AllBookingByRent", BookingController.AllBookingByRent)

}