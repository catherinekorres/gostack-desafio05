import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';
import { MdKeyboardBackspace } from 'react-icons/md';
import api from '../../services/api';

import Container from '../../components/Container';
import { Loading, Owner, IssueFilter, IssueList } from './styles';

// Returns black or white depending on given background-color so that text can be seen
function getContrastColor(bgColor) {
  if (!bgColor) {
    return '';
  }
  return parseInt(bgColor.replace('#', ''), 16) > 0xffffff / 2
    ? '#000'
    : '#fff';
}

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    issueState: 'all',
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props;

    const { issueState } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        // get only 5 open issues
        params: {
          state: issueState,
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  async componentDidUpdate(_, prevState) {
    const { issueState } = this.state;

    if (prevState.issueState !== issueState) {
      const { match } = this.props;

      const repoName = decodeURIComponent(match.params.repository);

      const issues = await api.get(`/repos/${repoName}/issues`, {
        params: {
          state: issueState,
          per_page: 5,
        },
      });

      this.setState({
        issues: issues.data,
      });
    }
  }

  handleFilterChange = e => {
    this.setState({ issueState: e.target.value });
  };

  render() {
    const { repository, issues, issueState, loading } = this.state;

    if (loading) {
      return (
        <Loading>
          <FaSpinner color="#fff" size={50} />
        </Loading>
      );
    }

    return (
      <Container>
        <Owner>
          <Link to="/">
            <MdKeyboardBackspace color="#7159c1" size={17} /> Voltar aos
            repositórios
          </Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <IssueList>
          <IssueFilter onChange={this.handleFilterChange} value={issueState}>
            <option value="all">All</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </IssueFilter>

          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span
                      ley={String(label.id)}
                      style={
                        label.color && {
                          backgroundColor: `#${label.color}`,
                          color: `${getContrastColor(`#${label.color}`)}`,
                        }
                      }
                    >
                      {label.name}
                    </span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
      </Container>
    );
  }
}
