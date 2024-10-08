import { useState } from 'react'
import Accordion from '../../components/accordian/Accordion'
import { accordionData } from '../../shared/constants'
import TwoZeroFourEight from '../../components/2048/TwoZeroFourEight';

const Components = () => {
    const [single, setSingle] = useState(false);
    return (
        <div className="components">
            <div>
                <h3 className='title-3'>Accordion</h3>
                <button onClick={() => setSingle(!single)} className='action-btn u-margin-bottom-small'>Enable {`${single ? "Multi" : "Single"}`}</button>
                <Accordion items={accordionData} type={single ? 'single' : "multi"} />
                <TwoZeroFourEight />
            </div>
        </div>
    )
}

export default Components