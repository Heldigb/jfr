import {throttle} from 'lodash';
import {useEffect, useState} from "react";

const getDeviceConfig = (width) => {
    if(width < 320) {
        return 'xs'
    } else if(width >= 320 && width < 720 ) {
        return 'sm'
    } else if(width >= 720 && width < 1024) {
        return 'md'
    } else if(width >= 1024 && width < 1280) {
        return 'lg'
    } else if(width >= 1280) {
        return 'xl'
    }
}

export const useBreakpoints = () => {
    const [brkPnt, setBrkPnt] = useState(() => getDeviceConfig());

    useEffect(() => {

        console.log('window.innerWidth', window?.innerWidth && window?.innerWidth || 'no')
        const calcInnerWidth = throttle(function() {
            setBrkPnt(getDeviceConfig(window.innerWidth))
        }, 200);
        window.addEventListener('resize', calcInnerWidth);
        return () => window.removeEventListener('resize', calcInnerWidth);
    }, []);

    return brkPnt;
}
