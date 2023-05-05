/** @format */
import {FC} from 'react';
interface IProp{
	[prop:string]:any
}
const MainComponent:FC<IProp> = ({
	beers,
	isLoading,
	className,
	fbeers,
	addToFavorite,
	removeFromfavorite,
}):JSX.Element => {
	return (
		<>
		
			{(beers as any[])?.length? <div className='ui link cards'>{(beers as any[])?.map(({id,name,tagline,description,image_url}: {id: string,name: string,tagline: string,description: string,image_url: string;},i: number) =>
			{
				return (
					<div className='card' key={i}>
						<div className='ui medium image'>
							<img
								className='medium ui image'
								src={image_url}
								alt='img'
								style={{width: 200,height: 200}}
							/>
						</div>
						<div className='content'>
							<i
								id={id}
								className={`right floated star icon
                  ${className&&
										Object.values(className as any[]).filter(({id: itemId}: {id: string;}) =>
											itemId===id? id:''
										).length>0
										? 'green'
										:''
									}`}
								onClick={
									className&&
										Object.values(className as any[]).filter(({id: itemId}: {id: string;}) =>
											itemId===id? id:''
										).length>0
										? removeFromfavorite
										:addToFavorite
								}
								title={`${className&&
										Object.values(className as any[]).filter(({id: itemId}: {id: string;}) =>
											itemId===id? id:''
										).length>0
										? 'Unmark Favorite'
										:'Mark Favorite'
									}`}
							/>
							<div className='header'>{name}</div>
							<div className='meta'>
								<label>{tagline}</label>
							</div>
							<div className='description'>{description}</div>
						</div>
					</div>
				);
			})}</div>:	<div className='loading'>
							<h1 className='ui header'>No Beer found with this name, please search again</h1>
						</div>}
				
		</>
	);
};
export default MainComponent;
