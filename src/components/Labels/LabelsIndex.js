import { Button } from 'react-bootstrap'
import EditLabelModal from './EditLabelModal'
import { useState, useEffect } from 'react'

const LabelsIndex = (props) => {
    const { msgAlert, user, labels, labelsError, triggerRefresh } = props

    const [editModalShow, setEditModalShow] = useState(false)
    const [updateLabel, setUpdateLabel] = useState({})

    // useEffect(()=>{console.log('updated label!!!!', updateLabel)}, [updateLabel])
    
    // console.log('labels: ', labels)

    if (labelsError) {
        return <p>Loading...</p>
    }
    // if no pets loaded yet, display 'loading'
    if (!labels) {
        return <p>Loading...</p>
        // otherwise if there are no pets, display that message
    } else if (labels.length === 0) {
        return <p>No files yet, go add some!</p>
    }

    const onClick = (e) => {
        console.log('labels index e value', e.target.value)
        setUpdateLabel(JSON.parse(e.target.value))
        console.log('!!!!!!UPDATELABEL', updateLabel)
        setEditModalShow(true)
    }

    const labelButtons = labels.map((label, i) => {
        // console.log('mapped labels', label)
        return (
            <>
                <Button 
                    className="m-2" 
                    style={{backgroundColor:`${label.color}`}}
                    key={label._id}
                    onClick={onClick}
                    value={JSON.stringify(label)}
                >{label.name}</Button>

            </>
        )
})

    // return some jsx, a container with all the pet cards
    return (
        <>
            <div className="container-sm" >
                { labelButtons }
            </div>
            <EditLabelModal
                    user={user}
                    editLabel={updateLabel}
                    msgAlert={msgAlert}
                    triggerRefresh={triggerRefresh}
                    show={editModalShow}
                    handleClose={() => setEditModalShow(false)}
                />
        </>
    )
}

// export our component
export default LabelsIndex


