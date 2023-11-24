const Notification = ({uniqueId, message}) => {

    const deleteNotification = () => {
        document.getElementById(uniqueId).style.opacity = 0;
        
        //Timeout used to entirely hide the notification after the transition ends
        setTimeout(() => {
            document.getElementById(uniqueId).style.display = 'none';
        }, 500);
    }

    return (
        <div id={uniqueId} className="notification">
            <p>{message}</p>
            <button id='tmp-notification' className="btn btn-primary" onClick={deleteNotification}>Dismiss</button>
        </div>
    );
}
 
export default Notification;