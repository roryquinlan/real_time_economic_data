import { connect } from 'react-redux'
import { selectMetric, fetchReleaseData } from '../actions'
import MetricList from '../components/metric_list'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return state
  // return {
  //   metrics: [],
  //   selectedMetric: null
  //   // todos: getVisibleTodos(state.todos, state.visibilityFilter)
  // }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMetricClick: (name) => {
      dispatch(selectMetric(name))
      dispatch(fetchReleaseData(name))
    }
  }
}

const FocusedMetricList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MetricList)

export default FocusedMetricList
