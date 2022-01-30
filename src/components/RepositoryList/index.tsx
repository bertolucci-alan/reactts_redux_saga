import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Repository } from "../../store/ducks/repositories/types";
import { ApplicationState } from "../../store";

import * as RepositoriesActions from '../../store/ducks/repositories/actions';

import RepositoryItem from '../RepositoryItem';

//Mapear o tipo das informações que vem do mapStateToProps
interface StateProps {
    repositories: Repository[]
}

//Mapear as funções que vem do mapDispatchToProps
interface DispatchProps {
    loadRequest(): void
}

/*
//Qualquer outra propriedade que vem de algum componente pai
interface OwnProps {
}
*/

type Props = StateProps & DispatchProps /*& OwnProps*/;

class RepositoryList extends Component<Props> {
    componentDidMount() {
        const { loadRequest } = this.props;

        loadRequest();
    }

    render() {
        const { repositories } = this.props;

        return (
            <ul>
                {repositories.map(repository => (
                    <RepositoryItem key={repository.id} repository={repository} />
                ))}
            </ul>
        )
    }
}
const mapStateToProps = (state: ApplicationState) => ({
    repositories: state.repositories.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(RepositoriesActions, dispatch)

//conectando um componet com redux
export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);