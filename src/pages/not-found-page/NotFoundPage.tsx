import { ErrorComponent } from 'src/components';

export const NotFoundPage: React.FC = () => (
    <ErrorComponent code={'404'} message={'This is not the page you were looking for!'} />
);
