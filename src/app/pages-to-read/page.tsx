import ReadingChartPage from "./reading-chart";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Reading Chart',
  description: 'Read more, Learn more',
}


const PagesToRead = () => {

    return (
        <div className='pt-15'>
            <div className="container mx-auto p-20">
                <ReadingChartPage />
            </div>
        </div>
    );
};

export default PagesToRead;