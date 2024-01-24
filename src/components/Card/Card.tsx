import React from 'react';
import { PinIcon } from '../icons';
import { Progress } from '../Progress/Progress';
import { HubStage, HubState } from '../../model/hub.model';
import { Badge } from '../Badge/Badge';

export interface HubDisplayable {
    uuid: string;
    slug: string;
    title: string;
    description: string;
    location: string;
    progress: {
        value: number;
        label: string;
    }
    image: string;
    logo: string;
    state: HubState;
    stage: HubStage;
    portfolio: boolean;
}

export const Card: React.FC<HubDisplayable> = ({ slug, image, logo, title, description, location, progress, state, stage, portfolio }) => {

    return (
        <a
            className=" max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 shadow-md cursor-pointer hover:shadow-lg"
            href={`https://test.cleanhub.com/hub/${slug}`}
            target='_blank'
            rel="noreferrer"
        >
            <img className="w-full h-60" src={image} alt="" />
            <div className="p-5 relative">
                <div className='absolute right-2 top-2'>
                    <Badge label={state} color={state === 'ACTIVE' ? 'green' : 'gray'} />
                    <Badge label={stage} color={stage === 'FULLY_ONBOARDED' ? 'green' : 'gray'} />
                    {portfolio && <Badge label={'PORTFOLIO'} color='red' />}
                </div>
                <div className='my-5'>
                    <div className='flex gap-2 mb-2'>
                        {logo && <img className="h-10 object-contain" src={logo} alt="" />}
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </div>
                    <div className='flex gap-2'>
                        <PinIcon />
                        <p className='text-xs font-bold dark:text-white'>{location}</p>
                    </div>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">{description}</p>
                <Progress progress={progress.value} label={progress.label} />
            </div>
        </a>
    );
}

