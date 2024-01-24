import { makeObservable, observable, action, runInAction } from 'mobx';

import { IHomeVM } from './Home.component';
import { fetchList } from '../../service/http/hubs';
import { HubsResponse } from '../../model/hub.model';
import { HubDisplayable } from '../../components/Card/Card';
import { sortAndOrder } from '../../utils';


export class HomeVM implements IHomeVM {

  public rawData?: Array<HubDisplayable>;
  public data?: Array<HubDisplayable>;
  public query: string = '';
  public order: string = 'asc';
  public sort: string = 'title';
  public loading: boolean = true;
  public error: boolean = false;

  constructor() {
    makeObservable(this, {
      loading: observable,
      data: observable,
      search: action,
    })
  }

  public search = (query: string): void => {
    runInAction(() => {
      this.query = query;
      const data = this.rawData.filter(el => {
        return el.title.toLowerCase().includes(query.toLowerCase())
      })

      this.data = sortAndOrder(data, this.sort, this.order)
    })
  }

  public setOrder = (value: string): void => {    
    runInAction(() => {
      this.order = value;
      this.data = sortAndOrder(this.data, this.sort, this.order)
    })
  }

  public setSort = (value: string): void => {
    runInAction(() => {
      this.sort = value;
      this.data = sortAndOrder(this.data, this.sort, this.order)
    })
  }

  public setPortfolioFilter = (checked: boolean): void => {
    runInAction(() => {
      if (checked) {
        this.data = this.data.filter(el => el.portfolio)
        return
      }
      this.data = sortAndOrder(this.rawData, this.sort, this.order)
    })
  }

  private fetch = async (): Promise<void> => {
    fetchList()
      .then((res: HubsResponse) => {
        runInAction(() => {
          this.rawData = res.map(el => ({
            uuid: el.uuid,
            slug: el.slug,
            title: el.displayName,
            description: el.cardDescription,
            location: el.location || '--',
            progress: {
              value: (el.recoveredQuantity / el.totalRecoveredQuantity) * 100,
              label: `${el.formattedRecoveredQuantity} / ${el.formattedTotalRecoveredQuantity} (${el.referenceQuantityUnit})`
            },
            image: el.cardImage.directLink || '',
            logo: el.logo?.thumbnailDirectLink || '',
            state: el.state,
            stage: el.stage,
            portfolio: !!el.portfolioAssignedQuantityPercentage
          }))

          this.data = sortAndOrder(this.rawData, this.sort, this.order)
        });
      })
      .catch((error) => {
        console.error(`Failed to fetch hubs: ${error}`);
        runInAction(() => { this.error = true })
      })
      .finally(() => {
        runInAction(() => { this.loading = false })
      });
  }

  public initialiseData = (initialParams): void => {
    this.fetch()
      .then(() => {
        const initialQuery = initialParams['query'];
        initialQuery && this.search(initialQuery)
      })
  }
}