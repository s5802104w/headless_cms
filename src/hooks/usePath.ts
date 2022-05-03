import { useRouter } from 'next/router';

export const usePath = () => {
  const router = useRouter();
  const firstFloor = router.asPath.split('/')[1].split('?')[0];
  const firstFloorId = router.query[firstFloor];
  return [firstFloor, firstFloorId];
};
