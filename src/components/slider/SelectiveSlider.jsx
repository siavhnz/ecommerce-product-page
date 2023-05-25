import { ReactComponent as Previous } from "../../assets/images/icon-previous.svg";
import { ReactComponent as Next } from "../../assets/images/icon-next.svg";


const SelectiveSlider = ({ thumbnails, images, hasControl }) => {

    const current = 0;

    return <div>
        <div>
            <img src={images[current]} alt="" />
        </div>
        <div>
            {
                thumbnails.map((thumbnail, index) => {
                    return <img src={thumbnail} alt="" key={index} />
                })
            }
        </div>
        {
            hasControl && <div>
                <button>
                    <Next aria-hidden={true} focusable={false} />
                </button>
                <button>
                    <Previous aria-hidden={true} focusable={false} />
                </button>
            </div>
        }

    </div>
}

export default SelectiveSlider;