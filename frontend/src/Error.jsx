export default function Error() {
    return (
        <>
            <div className="error">
                <div className="c-error">
                    <p id="access"><center>403 - ACCESS DENIED</center></p>
                    <p id="sub"><center>Oops, You don't have permission to access this page.</center></p>
                    <p id="description"><center>A 403 error, also known as a "Forbidden" error, is a HTTP status code that indicates that the user is not authorized to access the requested resource. This can occur for a variety of reasons, such
                        as incorrect permissions or authentication issues.</center></p>
                </div>
            </div>
        </>
    )
}