import { SkeletonItem } from './styles';

export function SkeletonLoader() {
  return (
    <>
      <SkeletonItem
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
        transition={{ duration: 0.5, yoyo: Infinity }}
        style={{
          width: '250px',
          height: '285px',
          marginBottom: '10px',
          borderRadius: '10px',
        }}
      />
      <SkeletonItem
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
        transition={{ duration: 0.5, yoyo: Infinity }}
        style={{
          width: '250px',
          height: '285px',
          marginBottom: '10px',
          borderRadius: '10px',
        }}
      />
      <SkeletonItem
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
        transition={{ duration: 0.5, yoyo: Infinity }}
        style={{
          width: '250px',
          height: '285px',
          marginBottom: '10px',
          borderRadius: '10px',
        }}
      />
      <SkeletonItem
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
        transition={{ duration: 0.5, yoyo: Infinity }}
        style={{
          width: '250px',
          height: '285px',
          marginBottom: '10px',
          borderRadius: '10px',
        }}
      />
    </>
  );
}
