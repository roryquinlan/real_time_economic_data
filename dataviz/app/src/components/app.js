import React, { Component } from 'react';
import FocusedMetricList from '../containers/focused_metric_list'
import SelectedChart from '../containers/selected_chart'
import { fetchMetrics } from '../actions'

export default class App extends Component {
  
  constructor(props) {
    super(props)
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.store.dispatch(fetchMetrics())
  }

  render() {
    return (
      <div>
        <FocusedMetricList />
        <SelectedChart />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMetricClick: (name) => {
      dispatch(selectMetric(name))
    }
  }
}

const FocusedMetricList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MetricList)