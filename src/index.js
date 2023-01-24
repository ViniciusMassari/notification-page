import "./sass/styles.scss";

const markAllread = document.querySelector(".mark-read")
const unreadNumberSpan = document.querySelector(".unread-number")
const unreadNotification = document.querySelectorAll(".notification.unread")
const notificationSubject = document.querySelectorAll(".notification-subject.unread")
const events = ["click", "touchstart"]



function markAsRead(event) {
    event.preventDefault()
    unreadNotification.forEach(unread =>{
        unread.classList.remove("unread")
    })
    notificationSubject.forEach(notification =>{
        notification.classList.remove("unread")
    })
    unreadNumberSpan.innerText = "0"
}

events.forEach(userEvent =>{
    markAllread.addEventListener(userEvent, markAsRead)
})

