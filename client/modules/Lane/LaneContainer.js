import { connect } from 'react-redux';
import Lane from './Lane';
import { createNote } from '../Note/NoteActions';
import { createLaneRequeast, editLane, deleteLaneRequest, updateLaneRequest, } from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';

const mapStateToProps = (state, ownProps) => ({
    laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId])
});

const mapDispatchToProps = {
    editLane,
    deleteLane: deleteLaneRequest,
    updateLane:updateLaneRequest,
    addNote: createNoteRequest,
    createLane: createLaneRequeast,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);
