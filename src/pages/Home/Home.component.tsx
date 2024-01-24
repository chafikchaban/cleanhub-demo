import { useCallback, useEffect } from "react";
import { observer } from "mobx-react";
import { Header, List } from "../../components";
import { useSearchParams } from "react-router-dom";
import { HeaderProps } from "../../components/Header/Header";
import { ListProps } from "../../components/List/List";

export interface IHomeProps {
  vm: IHomeVM
}

export interface IHomeVM extends HeaderProps, ListProps {
  query: string;
  initialiseData(initialParams: Record<string, string>): void;
}

export const HomeComponent: React.FC<IHomeProps> = observer(({ vm }) => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const initialParams = {};
    searchParams.forEach((value, key) => {
      initialParams[key] = value;
    });
    vm.initialiseData(initialParams)
  }, [])

  const renderHeader = useCallback(() => {
    return (
      <Header
        search={vm.search}
        setOrder={vm.setOrder}
        setSort={vm.setSort}
        setPortfolioFilter={vm.setPortfolioFilter}
      />
    )
  }, [])

  const renderList = useCallback(() => {
    return (
      <List data={vm.data} loading={vm.loading} error={vm.error} />
    )
  }, [vm.data, vm.error, vm.loading])


  return (
    <div className="max-w-6xl mx-auto py-8 xl:py-24 px-4 xl:px-0">
      {renderHeader()}
      {renderList()}
    </div>
  );
})

