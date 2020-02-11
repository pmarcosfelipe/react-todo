import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default props => (
  <div role="form" className="todoForm">
    <Grid cols="12 9 11">
      <input
        id="description"
        type="text"
        className="form-control"
        placeholder="Add a task"
      />
    </Grid>

    <Grid cols="12 3 1">
      <IconButton style="primary" icon="plus"></IconButton>
    </Grid>
  </div>
);
