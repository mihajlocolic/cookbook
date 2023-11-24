const Notification = ({uniqueId, message}) => {

    const deleteNotification = () => {
        document.getElementById(uniqueId).style.display = 'none';
    }

    return (
        <div id={uniqueId} className="notification">
            <p>{message}</p>
            <button id='tmp-notification' className="btn btn-primary" onClick={deleteNotification}>Dismiss</button>
        </div>
    );
}
 
export default Notification;