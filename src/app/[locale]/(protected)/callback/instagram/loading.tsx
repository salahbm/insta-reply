import Loader from '@/components/global/loader';

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader state>...loading</Loader>
    </div>
  );
};

export default Loading;
