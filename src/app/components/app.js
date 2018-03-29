import React, { Component } from 'react';
import SearchField from '../containers/search_field'
import SongList from '../containers/song_list'
import SongActionDialog from '../containers/songActionDialog'
import MenuBar   from '../containers/menubar'
import ActionModal from '../containers/actionModal'


class App extends Component { 
    render() {
        return(
            <div>
                <div>
                    <MenuBar/>
                </div>
                <div style={{ paddingTop:"8em" }}>
                    <SongList />
                </div>
                <hr/>
                <div>
                    <footer className="text-center">
                        <h5>Copyright is right to copy.  &copy; Zesloka 2581</h5>
                    </footer>    
                </div>
                <SongActionDialog />
                <ActionModal/>
                
            </div>
        )
    }
}

export default App;