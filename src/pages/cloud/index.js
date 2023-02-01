/** @jsxImportSource @emotion/react */
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiPanel,
  EuiText,
  EuiButton,
  EuiButtonEmpty,
  EuiButtonIcon,
  EuiSpacer,
  EuiBadge,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiTable,
  EuiTableHeader,
  EuiTableHeaderCell,
  EuiTableRow,
  EuiTableRowCell,
  EuiTableBody,
  useEuiTheme,
} from '@elastic/eui';
import Navbar from '../../components/navbar';

const CloudHomepage = () => {
  const { euiTheme } = useEuiTheme();
  const router = useRouter();

  const logoCircle = css`
    border-radius: 50%;
    height: 32px;
    width: 32px;
    box-shadow: 0 3px 2px rgb(0 0 0 / 10%);
    background: ${euiTheme.colors.lightestShade};
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const tableStyles = css`
    .euiTableHeaderCell:nth-child(5),
    .euiTableRowCell:nth-child(5) {
      .euiTableCellContent {
        justify-content: flex-end;
      }
    }
  `;

  const TABLE_HEADER = [
    'Deployment Name',
    'Status',
    'Version',
    'Cloud Region',
    'Manage Deployment',
  ];

  const TABLE_ITEMS = [
    {
      name: 'My deployment',
      status: <EuiBadge color="success">Healthy</EuiBadge>,
      version: '8.5.1',
      region: 'GCP - Iowa (us-central1)',
    },
  ];

  return (
    <>
      <Navbar
        isCloud
        breadcrumbs={[
          {
            text: 'Cloud',
          },
        ]}
      />
      <div
        css={css`
          margin: auto;
          max-width: 1600px;
          width: 100%;
        `}>
        <EuiSpacer size="xl" />
        <EuiFlexGroup gutterSize="l">
          <EuiFlexItem grow={2}>
            <EuiPanel>
              <EuiFlexGroup gutterSize="s" alignItems="center">
                <EuiFlexItem grow={false}>
                  <div css={logoCircle}>
                    <EuiIcon type="logoElasticsearch" size="m" />
                  </div>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiText>
                    <h4>Elasticsearch Service</h4>
                  </EuiText>
                </EuiFlexItem>
                <EuiFlexItem
                  grow={false}
                  css={css`
                    text-align: right;
                  `}>
                  <EuiButton fill iconType="plus">
                    Create a project
                  </EuiButton>
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiSpacer sizer="1" />
              <EuiTable css={tableStyles}>
                <EuiTableHeader>
                  {TABLE_HEADER.map(header => (
                    <EuiTableHeaderCell>{header}</EuiTableHeaderCell>
                  ))}
                </EuiTableHeader>
                <EuiTableBody>
                  <EuiTableRow>
                    {TABLE_ITEMS.map(item => (
                      <>
                        <EuiTableRowCell>
                          <EuiButtonEmpty flush="left">
                            {item.name}
                          </EuiButtonEmpty>
                        </EuiTableRowCell>
                        <EuiTableRowCell>{item.status}</EuiTableRowCell>
                        <EuiTableRowCell>{item.version}</EuiTableRowCell>
                        <EuiTableRowCell>{item.region}</EuiTableRowCell>
                        <EuiTableRowCell>
                          <EuiButtonIcon iconType="gear" />
                        </EuiTableRowCell>
                      </>
                    ))}
                  </EuiTableRow>
                </EuiTableBody>
              </EuiTable>
            </EuiPanel>
          </EuiFlexItem>
          <EuiFlexItem grow={1}>
            <EuiPanel>Cloud panel</EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    </>
  );
};

export default CloudHomepage;
