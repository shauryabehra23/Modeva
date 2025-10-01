export default function Features()
{
    return(
        <div className="Features">
            <div style={{gridArea:"a"}} className="border-8 border-gray-400 flex flex-col justify-start items-center ml-0 mr-0">
                <span class="material-symbols-outlined">
                        thumb_up
                </span>
                <p className="text-5xl">100% Satisfaction Guaranteed  </p>
                <p className="font-mono text-opacity-75">Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. </p>
            </div>
            <div style={{gridArea:"b"}} className="b border-8 border-gray-400 flex items-center">
                <span class="material-symbols-outlined">
                        call
                </span>
                <div>
                    <p className="text-5xl">24/7 Online Service</p>
                    <p className="font-mono text-opacity-75">Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. </p>
                </div>
            </div>
            <div style={{gridArea:"d"}} className="c border-8 border-gray-400 flex items-center">
                <span class="material-symbols-outlined">
                        rocket_launch
                </span>
                <div>
                    <p className="text-5xl">Fast Delivery</p>
                    <p className="font-mono text-opacity-75">Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. </p>
                </div>
            </div>
            <div style={{gridArea:"c"}} className="a border-8 border-gray-400 flex flex-col justify-start items-center ml-0 mr-0">
                <span class="material-symbols-outlined">
                        assured_workload
                </span>
                <p className="text-5xl">Payment With Secure System</p>
                <p className="font-mono text-opacity-75">Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. </p>
            </div>        </div>
    );
}