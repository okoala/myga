import { Card } from 'antd';
import { useLinkPreview } from './use-link-preview';
import styles from './link-preview.less';
const { Meta } = Card;

export function LinkPreview() {
  const { showLink, link } = useLinkPreview();
  return (
    <>
      <style>{styles}</style>
      <div className="okrrr-link-preview">
        {showLink && link && (
          <Card
            className="okrrr-link-preview-card"
            cover={
              link.cover && (
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              )
            }
          >
            <Meta title={link.title} description={link.description} />
          </Card>
        )}
      </div>
    </>
  );
}
