import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentsDetails from './CommentsDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (<div>
        <ApprovalCard>
            <CommentsDetails
                author="Kshitij"
                time="9:00pm"
                comment="Nice one"
                src={faker.image.avatar()} />
        </ApprovalCard>

        <ApprovalCard>
            <CommentsDetails
                author="Akash"
                time="12:00pm"
                comment="Great!"
                src={faker.image.avatar()} />
        </ApprovalCard>
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));