import { Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import MemberList from "./MemberList";
import NewMember from "./NewMember";

const Members = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">Members</h2>
        <NewMember />
      </div>
      <div className="suspense-loading">
        <ErrorBoundary>
          <Suspense
            fallback={<div className="suspense-loading">Loading...</div>}
          >
            <MemberList />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
};
export default Members;
