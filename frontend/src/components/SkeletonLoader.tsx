import React from 'react';

export const SkeletonRow: React.FC = () => {
  return (
    <tr className="animate-pulse border-b border-[#E9E3D5]/70">
      <td className="py-5 px-6">
        <div className="h-4 bg-[#E9E3D5] rounded w-36 mb-1.5"></div>
        <div className="h-3 bg-[#F3EFE6] rounded w-28"></div>
      </td>
      <td className="py-5 px-6">
        <div className="h-4 bg-[#E9E3D5] rounded w-48"></div>
      </td>
      <td className="py-5 px-6">
        <div className="h-4 bg-[#E9E3D5] rounded w-24"></div>
      </td>
      <td className="py-5 px-6">
        <div className="h-6 bg-[#E9E3D5] rounded-full w-24"></div>
      </td>
      <td className="py-5 px-6">
        <div className="h-4 bg-[#E9E3D5] rounded w-32"></div>
      </td>
      <td className="py-5 px-6">
        <div className="h-8 bg-[#E9E3D5] rounded-xl w-32 ml-auto"></div>
      </td>
    </tr>
  );
};

export const SkeletonLoaderTable: React.FC = () => {
  return (
    <>
      <SkeletonRow />
      <SkeletonRow />
      <SkeletonRow />
      <SkeletonRow />
      <SkeletonRow />
    </>
  );
};
