import './Dashboard.css'

export default function DashBoardPage() {
    return (
        <div className='app-container'>
          <div className='img-nav'>
    
            {/* Tile 1 */}
            <div className='tile'>
              <p spine>Lorem Ipsum</p>
              <div className='content'>
                <h1>Example Text</h1>
                <p>Lorem Ipsum</p>
              </div>
              <div className='img'></div>
            </div>
    
            {/* Tile 2 */}
            <div className='tile'>
              <p spine>Example 1</p>
              <div className='content'>
                <h1>Example Text</h1>
                <p>Lorem Ipsum</p>
              </div>
              <div className='img'></div>
            </div>
    
            {/* Tile 3 */}
            <div className='tile'>
              <p spine>Example 2</p>
              <div className='content'>
                <h1>Example Text</h1>
                <p>Lorem Ipsum</p>
              </div>
              <div className='img'></div>
            </div>
    
            {/* Tile 4 */}
            <div className='tile'>
              <p spine>Example 3</p>
              <div className='content'>
                <h1>Example Text</h1>
                <p>Lorem Ipsum</p>
              </div>
              <div className='img'></div>
            </div>
    
          </div>
        </div>
      );
}